//provides droppables and CSS
import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd'; // import needed for old drag / drop operation
import Task from './task';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px
    width: 220px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? '#002D4E' : 'white')};
    flex-grow:1;
    min-height:100px;
`;

export default class Column extends React.Component {
    render() {
        return (
        <Container>
            <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot )=> (
                    <TaskList
                        ref = {provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    > 
                        {this.props.tasks.map((task, index) => (
                            <Task key={task.id} task = {task} index = {index} />))}
                        {provided.placeholder}
                    </TaskList>
                    )}
                </Droppable>
        </Container>
        );
    }
}
