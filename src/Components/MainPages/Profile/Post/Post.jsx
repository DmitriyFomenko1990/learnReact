import style from './Post.module.css'


const Post = (props) => {
  return (<div>{props.message}</div>
  )
}

let PostsObj =[
  {id: 'Igor', message: 'post1', likeCount: 2 },
  {id: 'Igor', message: 'post2', likeCount: 5 },
  {id: 'Igor', message: 'post3', likeCount: 1 },
  {id: 'Igor', message: 'post4', likeCount: 0 },

]
let Posts = PostsObj.map( p => {
     return <Post message = {p.message} likeCount = {p.likeCount} id ={p.id} />
})



export default Post