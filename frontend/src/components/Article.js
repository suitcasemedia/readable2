import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const ItemContainer = styled.div`
  border-radius: 2px;
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fff;
`;

export default class Article extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.post.id} index={this.props.index}>
        {(provided) => (
          <ItemContainer 
            {...provided.draggableProps}  
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.post.title}
          </ItemContainer>
        )}
      </Draggable>
    );
  }
}
