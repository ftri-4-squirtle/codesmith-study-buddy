import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostPreview from './PostPreview.jsx';
import { previewOff, previewOn, buttonLess, buttonMore } from '../state-slices/bodyPreviewSlice';

const DUMMY_DATA = [
	{
		id: 1,
		title: 'Google question',
		category: 'algorithm',
		company: 'Google',
		body: 'Given a number represented by a list of digits, find the next greater permutation of a number, in terms of lexicographic ordering. If there is not greater permutation possible, return the permutation with the lowest value/ordering. For example, the list [1,2,3] should return [1,3,2]. The list [1,3,2] should return [2,1,3]. The list [3,2,1] should return [1,2,3]. Can you perform the operation without allocating extra memory (disregarding the input memory)?',
	},
	{ id: 2, title: 'Meta question', category: 'algorithm', company: 'Meta', body: 'Given a tree, find the largest tree/subtree that is a BST. Given a tree, return the size of the largest tree/subtree that is a BST.' },
	{
		id: 3,
		title: 'Amazon question',
		category: 'algorithm',
		company: 'Amazon',
		body: 'Given an array of numbers, find the length of the longest increasing subsequence in the array. The subsequence does not necessarily have to be contiguous. For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.',
	},
];

// redux store?

function mapStateToProps(state) {
	const { body, button } = state;
	return { body, button };
}

const mapDispatchToProps = {
	previewOff,
	previewOn,
	buttonLess,
	buttonMore,
};

function Home() {
	const previews = DUMMY_DATA.map((data, index) => {
		return (
			<div>
				<PostPreview key={index} data={data} />
			</div>
		);
	});
	console.log(previews);
	return (
		<div>
			<h1>Hi, this is the Home page!</h1>
			{previews}
			<p>
				<Link to='/'>login</Link>
			</p>
			<p>
				<Link to='/viewpost'>viewpost</Link>
			</p>
			<p>
				<Link to='/createpost'>createpost</Link>
			</p>
			<p>
				<Link to='/myaccount'>myaccount</Link>
			</p>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
