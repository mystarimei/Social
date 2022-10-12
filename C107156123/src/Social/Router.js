import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, Alert } from 'react-native';
import { Router, Stack, Scene, Actions, Tabs } from 'react-native-router-flux';
import First from './First';
import PosterContent from './PosterContent';
import PhotoDetail from './PhotoDetail';
import postData from './postData';
import EditPost from './EditPost';
import Search from './SearchPage/Search';
import CreatePost from './CreatPostPage/CreatePost';
import Test from './CreatPostPage/TEST';
import Personal from './PersonalPage/Personal';
import EditPersonal from './PersonalPage/EditPersonal';
import personal from './images/personal.png';
import personal2 from './images/personal2.png';
import home from './images/home.png';
import home2 from './images/home2.png';
import search from './images/search.png';
import search2 from './images/search2.png';
import add from './images/add.png';

const TabIconHome = (props) => (
  <Image source={props.focused ? home2 : home} style={{ width: 28, height: 28 }} />
)

const TabIconSearch = (props) => (
  <Image source={props.focused ? search2 : search} style={{ width: 34, height: 34 }} />
);

const TabIconAdd = () => (
  <Image source={add} style={{ width: 28, height: 28 }} />
);

const TabIconPersonal = (props) => (
  <Image source={props.focused ? personal2 : personal} style={{ width: 28, height: 28 }} />
);

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: postData,
      posters: [],
    }
  }

  componentDidMount() {
    const { posts } = this.state;

    const posters = [];
    // const favortiePosts = []
    // posts.forEach((post) => {
    //   const favortiepostsExist = posts.find((post) => {
    //     return post.favorite === true
    //   })

    //   if (favortiepostsExist) {
    //     favortiePosts.push({
    //       photo: post.photo
    //     })
    //   }
    // })
    posts.forEach((post) => {
      const posterExist = posters.find((poster) => {
        return poster.posterId === post.posterId;
      });

      if (!posterExist) {
        posters.push({
          posterId: post.posterId,
          posterName: post.posterName,
          avatar: post.avatar,
          introduce: post.introduce
        })
      }
    });

    this.setState({
      posters: posters,
      // favortiePosts:favortiePosts
    });
  }

  handleLike = (id) => {
    const newPosts = this.state.posts.map((post) => {
      return (
        post.id === id ? { ...post, like: !post.like, likeCount: post.like ? post.likeCount - 1 : post.likeCount + 1 } : { ...post }
      )
    })
    this.setState({
      posts: newPosts
    })
  };
  handleFavorite = (id) => {
    const newPosts = this.state.posts.map((post) => {
      return (
        post.id === id ? { ...post, favorite: !post.favorite } : { ...post }
      )
    })
    this.setState({
      posts: newPosts
    })
  }
  handleContent = (id) => {
    const { posters, posts } = this.state
    const poster = posters.find((poster) => poster.posterId === id);
    const posterPosts = posts.filter((post) => post.posterId === id);
    // console.log(poster)
    // console.log(posterPosts)
    Actions.push('PosterContent', { poster: poster, posterPosts: posterPosts, handleBack: this.handleBack, handlePhotoDetail: this.handlePhotoDetail })
  }

  handlePhotoDetail = (id) => {
    const { posts } = this.state
    const posterPhotos = posts.find((post) => post.id === id);
    // console.log(posterPhotos)
    Actions.push('PhotoDetail', { posterPhotos: posterPhotos, handleBack: this.handleBack, handleLike: this.handleLike, handleFavorite: this.handleFavorite, handlePhotoRight: this.handlePhotoRight })
  }

  handlePhotoRight = (id) => {
    const newPosts = this.state.posts.map((post) => {
      return (
        post.id === id ? { ...post, postId: post.postId + 1 } : { ...post }
      )
    })
    this.setState({
      posts: newPosts
    })
  }

  handleBack = () => {
    Actions.pop()
  }

  handleAddPost = (post) => {
    this.setState({
      posts: [
        ...this.state.posts,
        {
          posterID: 1,
          id: this.state.posts.length + 1,
          publish: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
          avatar: this.state.posts[0].avatar,
          posterName: this.state.posts[0].posterName,
          ...post,
          likeCount: 0,
          favorite: false
        }
      ]
    });
  };

  handleEditPersonal = (id) => {
    const EditPersonal = this.state.posts.map((post) => {
      return post.posterId === 1 ? {
        ...post,
        posterName: id.posterName,
        introduce: id.introduce,
      } : { ...post }
    });
    this.setState({
      posters: EditPersonal
    })
  }

  handleEditAvatar = (data) => {
    const newAvater = this.state.posts.map((post) => {
      return post.posterId === 1 ? { ...post, avatar: data.avatar } : { ...post }
    });
    this.setState({
      posts: newAvater
    })
  }

  handleToEditPersonal = () => {
    const { posters } = this.state
    const posterself = posters[0]
    console.log(posterself)
    Actions.push('EditPersonal', { posterself: posterself, handleEditPersonal: this.handleEditPersonal, handleEditAvatar: this.handleEditAvatar })
  }


  handleEditPost = (data) => {
    const newPosts = this.state.posts.map((post) => {
      return post.posterId === 1 ? { ...post, comment: data.comment } : { ...post }
    })
    this.setState({
      posts: newPosts
    })
  }

  handleToEditPost = (id) => {
    const { posts } = this.state
    const Editposts = posts.find((post) => post.id === id)
    console.log(Editposts)
    if (Editposts.posterId === 1) {
      Actions.push('EditPost', { Editposts: Editposts, handleEditPost: this.handleEditPost });
    } else {
      Alert.alert('通知', '無權限修改此文章', [{ text: '確定' }], {
        cancelable: true,
      });
    }
  }


  render() {
    const { posters, posts } = this.state
    const MyPosts = posts.filter((post) => post.posterId === 1);
    const FavoritePosts = posts.filter((post) => post.favorite === true)
    return (
      <Router>
        <Tabs headerLayoutPreset="center" tabBarPosition="bottom" showLabel={false}>
          <Stack key="root" title="首頁" icon={TabIconHome} headerLayoutPreset="center">
            <Scene key="First" component={First} initial hideNavBar={true} posters={posters} posts={posts}
              handleLike={this.handleLike}
              handleFavorite={this.handleFavorite}
              handleContent={this.handleContent}
              handleToEditPost={this.handleToEditPost} />
            <Scene key="PosterContent" hideNavBar={true} component={PosterContent} />
            <Scene key="PhotoDetail" hideNavBar={true} component={PhotoDetail} />
            <Scene key="EditPost" hideNavBar={true} component={EditPost} />
          </Stack>
          <Scene key="search" title="搜尋" hideNavBar={true} component={Search} icon={TabIconSearch} posters={posters} renderLeftButton={null} handleContent={this.handleContent} />
          <Stack key="add" title="貼文" hideNavBar={true} icon={TabIconAdd}>
            <Scene key="createPost" component={CreatePost} renderLeftButton={null} posts={posts} handleAddPost={this.handleAddPost} />
          </Stack>
          <Stack icon={TabIconPersonal}>
            <Scene key="personal" title="個人簡介" hideNavBar={true} component={Personal} renderLeftButton={null} MyPosts={MyPosts} FavoritePosts={FavoritePosts} handleToEditPersonal={this.handleToEditPersonal} handlePhotoDetail={this.handlePhotoDetail} />
            <Scene key="EditPersonal" title="編輯個人檔案" hideNavBar={true} component={EditPersonal} />
          </Stack>
        </Tabs>
      </Router>
    );
  }
}
export default Route;