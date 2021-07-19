import React, { Component } from 'react';
import PostData from '../data/posts.json';
import { useSpring, animated } from 'react-spring'


class PostList extends Component {
    render() {
        return (
            <useSpring
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ delay: 1000, duration: 1000 }}
            >
                <animated.div>
                    {PostData.map((postDetail, index) => {
                        return <div style={cStyle}>
                            <h1>{postDetail.title}</h1>
                            <p>{postDetail.content}</p>
                        </div>
                    })}
                </animated.div>

            </useSpring>
        )
    }
}

const cStyle = {
    background: 'green',
    color: 'white',
    padding: '1.5rem',
    textAlign: 'center'
}
export default PostList