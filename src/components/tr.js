import React from 'react'
import Td from './td'
import '../files/flex-styles.css';



class Tr extends React.Component {
	render() {
		const table = this.props.colors.map((item, index) => {
			if (item.clsName != "delete") {
				return(
				<Td 
					key={index}
					id={item.id}
					name={item.color}
					clsName={item.clsName}
					click={item.clicking}  
					onClickHandler={this.props.onClickHandler}
				/>
				)
			}
			if (item.clsName === "delete"){
				return (
					<p key={index} className="p"></p>
				)	
			}
			
		})
		return(
			<div className="container width" >
				{table}
			</div>
		)
	}
}

export default Tr