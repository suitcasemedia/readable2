import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Article from './Article';
import { DragDropContext } from 'react-beautiful-dnd';
import { connectableObservableDescriptor } from 'rxjs/observable/ConnectableObservable';
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;

const ArticleList = styled.div`
  padding: 8px;
`;
export default class Column extends React.Component {
  //state = initData;
 
  render() {
    console.log('column props:', JSON.stringify(this.props))
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Container>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {(provided) => (
              <ArticleList
                ref={provided.innerRef}
                {...provided.droppableProps}
                >
                {this.props.posts.map((post,index) => (
                <div><span className="float-left p-2">{index+ 1}</span> <Article key={post.id}  index={index} post={post} /></div> 
                ))}
                {provided.placeholder}
              </ArticleList>
            )}
          </Droppable>
        </Container>
      </DragDropContext>
    );
  }
}
