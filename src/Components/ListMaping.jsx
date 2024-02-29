import Cards from './Cards';

export default function ListMaping({ toDoList, deletePost}) {

  return (
    <div>
      {/*Toggle for been sure that even if the content is wrong, the app will continue displaying */}
      {toDoList && toDoList.length > 0 &&toDoList.map((post) => (
        <Cards  key={post.id} post={post} deletePost={deletePost}/>
      ))}
    </div>
  )
}
