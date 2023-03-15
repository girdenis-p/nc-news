import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchArticlesData, fetchTopics } from "../utils/api";
import ArticleCard from "./ArticleCard";

import './Articles.css'
import PageIncrementer from "./PageIncrementer";
import SortByForm from "./SortByForm";

function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { topic: topicSlug } = useParams();

  const [topicDescription, setTopicDescription] = useState(null);

  const [articles, setArticles] = useState([]);
  const [totalArticleCount, setTotalArticleCount] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);

  //Set articles and page to initial states while re-rendering so that the useEffect will have articles as [] 
  //and page at 1 when the topic or searchParams changes
  useMemo(() => {
    setArticles([]);
    setPage(1);
  }, [searchParams, topicSlug])

  useEffect(() => {
    setTopicDescription(null)

    if (topicSlug) {
      fetchTopics(topicSlug)
        .then(topics => {
          const matchingTopic = topics.find(singleTopic => {
            return singleTopic.slug === topicSlug
          })

          setTopicDescription(matchingTopic.description)
        })
    } else {
      setTopicDescription('All the articles from every topic!')
    }
  }, [topicSlug])

  useEffect(() => {
    setIsLoading(true)
    fetchArticlesData({
        page, 
        topic: topicSlug,
        sortBy: searchParams.get("sort_by"),
        order: searchParams.get("order")
      })
      .then(articlesData => {
        setArticles(currArticles => [...currArticles, ...articlesData.articles]);
        setTotalArticleCount(articlesData.total_count)

        setIsLoading(false);
      })
  }, [page, topicSlug, searchParams])


  return (
    <main className="Articles">
      <h2>{
        topicSlug ? 
        `${topicSlug[0].toUpperCase() + topicSlug.slice(1)} Section` :
        "All Articles"
      }</h2>
      <p className="TopicDescription">{
        topicDescription === null ?
        "Fetching description..." :
        topicDescription
      }</p>
      <SortByForm />
      <ul>
      {
        articles.map(article =>
          <ArticleCard key={article.article_id} article={article} />
          )
        }
      </ul>
      <PageIncrementer listName="articles" listLength={articles.length} totalCount={totalArticleCount} isLoading={isLoading} setPage={setPage} />
    </main>
  )
}

export default Articles;