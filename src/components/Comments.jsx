import { useState } from "react"
import Comment from "./Comment";

import "./Comments.css"

function Comments() {
  const [comments, setComments] = useState([{"comment_id":89,"body":"Esse et expedita harum non. Voluptatibus commodi voluptatem. Minima velit suscipit numquam ea. Id vitae debitis aut incidunt odio quo quam possimus ipsum.","article_id":1,"author":"cooljmessy","votes":2,"created_at":"2020-10-24T07:08:00.000Z"},{"comment_id":86,"body":"Et explicabo dignissimos officia dolore rerum aliquam corrupti. Culpa corporis earum et earum officia a est atque at. Quidem quo recusandae delectus autem possimus blanditiis optio. Sed culpa culpa. Exercitationem nemo aspernatur alias ut qui.","article_id":1,"author":"tickle122","votes":14,"created_at":"2020-10-04T02:03:00.000Z"},{"comment_id":31,"body":"Sit sequi odio suscipit. Iure quisquam qui alias distinctio eos officia enim aut sit. Corrupti ut praesentium ut iste earum itaque qui. Dolores in ab rerum consequuntur. Id ab aliquid autem dolore.","article_id":1,"author":"weegembump","votes":12,"created_at":"2020-09-26T17:16:00.000Z"},{"comment_id":85,"body":"Assumenda sit est blanditiis asperiores est minima. Placeat sequi tenetur autem consequatur soluta molestiae. Incidunt neque labore et dolorem et vel possimus nemo quidem.","article_id":1,"author":"happyamy2016","votes":0,"created_at":"2020-08-23T02:14:00.000Z"},{"comment_id":52,"body":"Consectetur deleniti sed. Omnis et dolore omnis aspernatur. Et porro accusantium. Tempora ullam voluptatum et rerum.","article_id":1,"author":"jessjelly","votes":10,"created_at":"2020-07-07T09:14:00.000Z"},{"comment_id":44,"body":"Error est qui id corrupti et quod enim accusantium minus. Deleniti quae ea magni officiis et qui suscipit non.","article_id":1,"author":"grumpy19","votes":4,"created_at":"2020-06-15T16:13:00.000Z"},{"comment_id":286,"body":"Ut accusamus enim vel voluptate quae temporibus labore neque a. Reprehenderit iste est eos velit fugit vel quod velit.","article_id":1,"author":"cooljmessy","votes":19,"created_at":"2020-04-26T02:14:00.000Z"},{"comment_id":33,"body":"Explicabo perspiciatis voluptatem sunt tenetur maxime aut. Optio totam modi. Perspiciatis et quia.","article_id":1,"author":"cooljmessy","votes":4,"created_at":"2019-12-31T21:21:00.000Z"}]);

  return (
    <section className="Comments">
      <h3>Comments</h3>
      <ul>
        {
          comments.map(comment =>
              <Comment comment={comment} />
            )
        }
      </ul>
    </section>
  )
}

export default Comments;