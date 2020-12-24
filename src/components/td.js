import React from 'react'


export default function Td(props) {
	return(			
		<p 	
			id={props.id}
			name={props.name}
			className={props.clsName}
			onClick={props.click ? props.onClickHandler : console.log("клик отклонен") }>
		</p>
	)
}
