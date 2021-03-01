import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPost, getUsers } from '../modules/sample'
import Sample from '../components/Sample'

const SampleContainer = ({
	loadingPost,
	loadingUsers,
	post,
	users,
	getPost,
	getUsers
}) => {
	
	useEffect(() => {
		getPost(1)
		getUsers()
	}, [getPost, getUsers])
	
	return (
		<Sample
			loadingPost={loadingPost}
			loadingUsers={loadingUsers}
			post={post}
			users={users}
		/>
	)
}

export default connect(
	({ sample, loading }) => ({
		loadingPost: loading['sample/GET_POST'],
		loadingUsers: loading['sample/GET_USERS'],
		post: sample.post,
		users: sample.users
	}),
	{
		getPost,
		getUsers
	}
)(SampleContainer)