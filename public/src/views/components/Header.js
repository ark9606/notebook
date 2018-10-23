import React, {Component} from 'react';

const FormInput = ({title, type, name, max, onChange, value}) => (
  <div className="form_input">
    <label htmlFor={name}>{title}</label>
    <input type={type ? type : 'text'} id={name}
           required maxLength={max ? max : 45}
           value={value}
           onChange={onChange && onChange} />
  </div>
);

const FormButton = ({title, onClick}) => (
  <div className="form_input">
    <button type="submit" onClick={onClick && onClick}>{title}</button>
  </div>
);


export default class App extends Component {

  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e){
    e.preventDefault();

    const { putRecord, reset, editRecord,
      id, name, phone, email} = this.props;

    if(id > 0){
      editRecord({id, name, phone, email});
    }
    else{
      putRecord({name, phone, email});
    }

    reset();
  }

  onChange(e){
    this.props.input({name: e.target.id, value: e.target.value});
  }

  render(){
    const { name, phone, email} = this.props;

    return(
      <form action="" id="header_form" ref={(node) => {this.form = node;}} onSubmit={(e) => this.onSubmit(e)}>

        <FormInput title="ФИО" name="name" max="100" onChange={this.onChange} value={name}/>
        <FormInput title="Телефон" name="phone" onChange={this.onChange} value={phone}/>
        <FormInput title="Email" name="email" type="email" onChange={this.onChange} value={email}/>


        <FormButton title="Сохранить"/>
      </form>
    )
  }
}