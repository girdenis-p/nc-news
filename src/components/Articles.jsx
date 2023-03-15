import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchArticlesData, fetchTopics } from "../utils/api";
import ArticleCard from "./ArticleCard";

import './Articles.css'
import PageIncrementer from "./PageIncrementer";
import SortByForm from "./SortByForm";

function Articles() {
  const [searchParams] = useSearchParams();
  const searchParamsRef = useRef(searchParams)

  const { topic: topicSlug } = useParams();
  const topicSlugRef = useRef(topicSlug)

  const [topicDescription, setTopicDescription] = useState(null);

  const [articles, setArticles] = useState([]);
  const [totalArticleCount, setTotalArticleCount] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setTopicDescription(null)

    if (topicSlug) {
      fetchTopics(topicSlug)
        .then(topics => {
          if (topicSlugRef.current === topicSlug) {
            const matchingTopic = topics.find(singleTopic => {
              return singleTopic.slug === topicSlug
            })
            
            setTopicDescription(matchingTopic.description)
          }
        })
    } else {
      setTopicDescription('All the articles from every topic!')
    }
  }, [topicSlug])

  useEffect(() => {
    topicSlugRef.current = topicSlug;
    searchParamsRef.current = searchParams;

    setArticles([])
    setPage(1);
    setIsLoading(true)
    fetchArticlesData({
        page: 1, 
        topic: topicSlug,
        sortBy: searchParams.get("sort_by"),
        order: searchParams.get("order")
      })
      .then(articlesData => {
        if (topicSlugRef.current === topicSlug && searchParamsRef.current === searchParams) {
          setArticles(articlesData.articles);
          setTotalArticleCount(articlesData.total_count)
          
          setIsLoading(false);
        }
      })
  }, [topicSlug, searchParams])

  useEffect(() => {
    if (page !== 1) {
      setIsLoading(true)
      fetchArticlesData({
        page: page, 
        topic: topicSlugRef.current,
        sortBy: searchParamsRef.current.get("sort_by"),
        order: searchParamsRef.current.get("order")
      })
      .then(articlesData => {
        setArticles(currArticles => [...currArticles, ...articlesData.articles]);
        
        setIsLoading(false);
      })
    }
  }, [page])


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