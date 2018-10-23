import React from 'react';

const Column = (props) => (
  <div className="col">
    {props.children}
  </div>
);

const Button = ({title, onClick}) => (
  <div className="record_button">
    <button onClick={onClick && onClick}>{title}</button>
  </div>
);

export default (props) => (
  <div className={`record${props.even ? '' : ' even'}`}>

    <Column>
      {props.name}
    </Column>

    <Column>
      {props.phone}
    </Column>

    <Column>
      {props.email}
    </Column>


    <Column>
      <Button title="Изменить" onClick={() => props.onEdit({id: props.id, name: props.name, phone: props.phone, email: props.email})}/>
      <Button title="Удалить" onClick={() => props.onDelete({id: props.id})}/>
    </Column>
    
  </div>
);