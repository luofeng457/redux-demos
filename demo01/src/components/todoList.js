import React  from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const TodoList = (props) => {
	return (
		<div style={{margin: '10px'}}>
			<div>
				<Input
					placeholder="something to be done"
					style={{width: '250px', marginRight: '10px'}}
					value={props.inputValue}
					onChange={props.handleInputChange}
				/>
				<Button
					type="primary"
					onClick={props.handleAddItem}
				>增加</Button>
			</div>
			<div>
				<List
					style={{width: "500px", marginTop: '20px'}}
					bordered /* 是否展示边框 */
					size="middle"
					dataSource={props.list}
					renderItem={(item, index)=><List.Item onClick={() => props.handleRmItem(index)}>{item}</List.Item>}
				/>
			</div>
		</div>
	);
}

export default TodoList;