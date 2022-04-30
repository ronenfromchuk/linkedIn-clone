import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>           
            setPosts(
                snapshot.docs.map((doc) => (       
                {
                    id: doc.id,
                    data: doc.data(),
                }
            ))
        ));
}, []); 
    
    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        // cleans the input field --->
        setInput("");
    };

  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      type="text"
                    />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                 <InputOption
                Icon={CalendarViewDayIcon}
                title='Article'
                color='#7FC15E'
            />              
            </div>
        </div>

        <FlipMove>
            {posts.map(({ id, data: { name, description, message,
            photoUrl } }) => (
                <Post
                    name={name}
                    description={description}
                    key={id}
                    photoUrl={photoUrl}
                    message={message}
                />
            ))}
        </FlipMove>        
    </div>
  )
}

export default Feed;