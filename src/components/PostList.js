import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../action'

export class PostList extends Component {
    componentDidMount() {
        this.props.fetchPost();
    }
    render() {
        return (
            <div>
                post list
            </div>
        )
    }
}

export default connect(null, { fetchPost })(PostList)
