import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
import { reduxForm, InjectedFormProps } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Element, createField, GetStringKeys } from '../../common/FormControls/FormControls';
import { PostType } from '../../../types/types';

export type MapPostsPropsType = {
  posts: Array<PostType>
}
export type DispatchPostsPropsType = {
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPostsPropsType & DispatchPostsPropsType> = (props) => {

  let postsElement = props.posts.map((p) => <Posts message={p.message} likeCount={p.likesCount} />);

  const onAddPost = (values: AddPostFormValuesType) => {
    props.addPost(values.newPostText);
  }

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddMyPostsFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>
          { postsElement }
        </div>
      </div>
    );
};

const MyPostsMemorized = React.memo(MyPosts);

type FormPropsType = {

}

export type AddPostFormValuesType = {
  newPostText: string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const maxLength10 = maxLengthCreator(10);

const AddNewPostsForm: React.FC<InjectedFormProps<AddPostFormValuesType, FormPropsType> & FormPropsType> = (props) => {
  const Textarea = Element('textarea');
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<AddPostFormValuesTypeKeys>('Enter Your post', 'newPostText', [required, maxLength10], Textarea)}
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddMyPostsFormRedux = reduxForm<AddPostFormValuesType, FormPropsType>({form: 'ProfileAddNewPostsForm'})(AddNewPostsForm);

export default MyPostsMemorized;
