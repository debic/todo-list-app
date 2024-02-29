import deleteIcon from '../img/delete.svg';
import editIcon from '../img/edit.svg';

export default function PostCard({ post,  deletePost }) {

 const hanldeDeletePost = () => {
    deletePost(post.id)
}


return (
  <div className='postContainer'>
      <div className='postContainerInfo'>
          <div className={post.type}></div>
          <div className='textPost'>
              <p className='textPostTitle'>{post.text}</p>
              <p className='textPostDate'>{post.createDate}</p>
          </div>
      </div>
      <div className='icons'>
          <img src={deleteIcon} onClick={hanldeDeletePost} className="deleteIcon" alt="Trash bin icon" />
          <img src={editIcon} className="editIcon" alt="Pencil icon" />
      </div>
  </div>
)
}
