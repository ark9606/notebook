import React, {Component} from 'react';

const Triangle = ({type}) => (
  <div className="triangle">
    {!type && <div>&#9650;</div>}
    {!type && <div>&#9660;</div>}

    {type === 'asc'  && <div>&#9650;</div>}
    {type === 'desc' && <div>&#9660;</div>}
  </div>
);

const ControlButton = ({title, onClick, arrange}) => (
  <div className="controls_button">
    <button onClick={onClick && onClick}>{title}</button>
    {onClick && <Triangle type={arrange}/>}
  </div>
);


export default class extends Component {
  constructor(props){
    super(props);
  }


  render(){
    const {arrangeName, arrangePhone, arrange:{ phone, name }} = this.props;

    return(
      <div className="records_container">
        <div className="controls">
          <ControlButton title="ФИО" onClick={arrangeName} arrange={name}/>
          <ControlButton title="Телефон" onClick={arrangePhone} arrange={phone}/>
          <ControlButton title="Email"/>
        </div>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    )
  }
}