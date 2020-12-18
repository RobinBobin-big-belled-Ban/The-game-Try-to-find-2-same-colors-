import React from 'react'


export default class Td extends React.Component {
	render() {
		return(
			<p onClick={(event, item) => this.props.onClickHandler(event, this.props.name)}></p>
		)
	}

}
