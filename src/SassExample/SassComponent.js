import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
	return (
		<div className={styles.CSSModule}>
			<div className={`${styles.red} ${styles.wider}`} />
			<div className="box orange" />
			<div className="box yellow" />
			<div className="box green" />
			<div className="box blue" />
			<div className="box indigo" />
			<div className="box violet" />
		</div>
	);
}

export default CSSModule;

// import './SassComponent.scss';

// const SassComponent = () => {
// 	return (
// 		<div className="SassComponent">
// 			<div className="box red" />
// 			<div className="box orange" />
// 			<div className="box yellow" />
// 			<div className="box green" />
// 			<div className="box blue" />
// 			<div className="box indigo" />
// 			<div className="box violet" />
// 		</div>
// 	);
// }

// export default SassComponent;