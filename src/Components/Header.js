import Button from "./Button"

const Header = ({title, onOpen}) => {
  return ( 
    <header className = 'header'>
      <h1>{title}</h1>
      <Button onClick = {onOpen} color = 'green' text = 'Add'/>
    </header>
   );
}

export default Header;