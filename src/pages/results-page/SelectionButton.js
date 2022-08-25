import React from "react";
import Button from 'react-bootstrap/Button';

const SelectionButton = (props) => {
	const btnText = {color: "black", fontFamily: "Courier New", fontSize: 16, fontWeight: 800, backgroundColor: '#8A5656', border: '0px'};
  const selectedBtnText = {color: "black", fontFamily: "Courier New", fontSize: 16, fontWeight: 800, backgroundColor: '#8A5656',
    border: '0px', textDecoration: 'underline'};

	if (props.fetchType === props.btnType) {
		return(
			<Button className='m-2' style={selectedBtnText} onClick={() => {
				props.setFetchType(props.btnType);
			}}>{props.name}</Button>
		)
	} else {
		return(
			<Button className='m-2' style={btnText} onClick={() => {
				props.setFetchType(props.btnType);
			}}>{props.name}</Button>
		)
	}
}

export default SelectionButton;