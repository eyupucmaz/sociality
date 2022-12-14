import iconOptions from '../assets/icon-options.svg';
import iconDelete from '../assets/icon-delete.svg';
import iconCancel from '../assets/icon-cancel.svg';
import iconLikes from '../assets/icon-likes.svg';
import iconComments from '../assets/icon-comments.svg';
import iconShare from '../assets/icon-shares.svg';
import iconViews from '../assets/icon-views.svg';
import noPostImage from '../assets/no-post-image.png';
import { dateWithHours } from '../utils/dateFormatter';

export default function Post(post: any) {
  const postState = post.post.status;
  const postStateColor =
    postState === 0
      ? '#F7BF38'
      : postState === 1
      ? '#3AC183'
      : postState === 2
      ? '#C94225'
      : postState === 3
      ? '#ACACAC'
      : postState === 4
      ? '#FB6450'
      : '#67B1F2';

  const postDate = dateWithHours(post.post.published_at);

  return (
    <div className="w-[369px] h-[446px] flex">
      {/* POST STATUS */}
      <div
        className={`w-10 h-full basis-10 grid place-items-center`}
        style={{ backgroundColor: postStateColor }}
      >
        <i
          className={`fa-brands text-white text-[35px] fa-${
            post.post.account.channel === 'instagrambusiness'
              ? 'instagram'
              : post.post.account.channel
          } `}
        ></i>
      </div>
      {/* POST CONTENT */}
      <div className="h-full w-full bg-white p-5">
        {/* action & details */}
        <div className="flex justify-between">
          <div className="text-sm text-f-secondary">{postDate}</div>
          <div className="flex justify-between basis-20">
            <img
              src={iconCancel}
              alt="cancel icon"
              className="cursor-pointer"
            />
            <img
              src={iconDelete}
              alt="delete icon"
              className="cursor-pointer"
            />
            <img
              src={iconOptions}
              alt="options icon"
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* post content */}
        <div className="pt-4 text-f-primary">
          {<p className="text-sm">{post.post.entry.message}</p>}
        </div>
        {/* image */}
        <div className="w-[284px] h-[239px] mt-3 bg-slate-400">
          {post.post.entry.image[0] ? (
            <img
              src={post.post.entry.image[0]}
              alt="post image"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = noPostImage;
              }}
            />
          ) : (
            <img
              src={noPostImage}
              alt="no post image"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </div>
        {/* statistics */}
        <div className="flex justify-start items-center mt-4">
          <img
            src={iconLikes}
            alt="like icon"
            className="ml-5 cursor-pointer"
          />
          <span className="text-sm text-f-secondary ml-2">0</span>
          <img
            src={iconComments}
            alt="comment icon"
            className="ml-5 cursor-pointer"
          />
          <span className="text-sm text-f-secondary ml-2">0</span>
          <img
            src={iconShare}
            alt="share icon"
            className="ml-5 cursor-pointer"
          />
          <span className="text-sm text-f-secondary ml-2">0</span>
          <img
            src={iconViews}
            alt="view icon"
            className="ml-5 cursor-pointer"
          />
          <span className="text-sm text-f-secondary ml-2">0</span>
        </div>
      </div>
    </div>
  );
}
