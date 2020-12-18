import React from 'react'
import colors from '../files/file'
import Td from './td'
import '../files/flex-styles.css';



class Tr extends React.Component {
	constructor() {
		super()
		this.state ={
			colors: colors,
		}
	}
	render() {
		const table = this.state.colors.map((item, index) => {
			return(
				<Td key={index} name={item}  onClickHandler={this.props.onClickHandler}/>
			)
		})
		return(
			<div className="container width">
				{table}
			</div>
		)
	}
}

export default Tr