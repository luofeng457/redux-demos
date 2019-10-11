import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, List} from 'antd';
import 'antd/dist/antd.css';


const TodoList = (props) => {
  return (
    <div>
      <div>
        <Input
          style={{width: '300px', margin: '20px'}}
          placeholder="something to be done"
          value={props.inputValue}
          onChange={props.handleChange}
        />
        <Button
          type="primary"

        >添加</Button>
      </div>
      <List
        style={{width: '500px', marginLeft: '20px'}}
        bordered
        dataSource={props.list}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

// TodoList.propTypes = {
  
// };

export default TodoList;