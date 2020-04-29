import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Element } from '../../common/FormControls/FormControls';

const MyPosts = (props) => {

  let postsElement = props.posts.map((p) => <Posts message={p.message} likeCount={p.likesCount} />);

  const onAddPost = (values) => {
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

const maxLength10 = maxLengthCreator(10);

const AddNewPostsForm = (props) => {
  const Textarea = Element('textarea');
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' validate={[required, maxLength10]} component={Textarea} placeholder='Enter Your post' />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddMyPostsFormRedux = reduxForm({form: 'ProfileAddNewPostsForm'})(AddNewPostsForm);

export default MyPosts;
