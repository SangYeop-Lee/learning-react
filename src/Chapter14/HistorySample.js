import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const HistorySample = ({ location }) => {
	
	const history = useHistory();
	
	let unblock;
	
	const handleGoBack = () => {
		unblock = history.block('정말 떠나실 건가요?');
		history.goBack();
	}
	
	const handleGoHome = () => {
		unblock = history.block('정말 떠나실 건가요?');
		history.push('/');
	}
	
	useEffect(() => {
		return () => {
			if (unblock) {
				unblock();
			}
		}
	});
	
	return (
		<div>
			<button onClick={handleGoBack}>뒤로</button>
			<button onClick={handleGoHome}>홈으로</button>
		</div>
	);
};

export default HistorySample;