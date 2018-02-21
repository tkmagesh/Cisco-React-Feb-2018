import React from 'react';
import BugItem from './BugItem';

const BugList = ({bugs, toggle, removeClosed}) => {
	let bugItems = bugs.map((bug,index) => (
			<BugItem key={index} {...{bug, toggle}} />
		));
	return (
		<section className="list">
			<ol>
				{bugItems}
			</ol>
			<input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)} />
		</section>
	)
}
export default BugList;