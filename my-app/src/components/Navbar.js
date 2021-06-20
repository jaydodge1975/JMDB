import { useHistory, Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import FormControl from 'react-bootstrap/FormControl'
// import InputGroup from 'react-bootstrap/InputGroup';

const Navbar = ({ searchText, setSearchText }) => {

  const history = useHistory()

  const updateSearchText = (e) => {
      history.push('/search')
      setSearchText(e.target.value)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">JMDB</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/movies">Movies</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/tv">TV</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/people">People</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/popular">Popular</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/coming-soon">Coming soon</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

          </ul>

          {/* <InputGroup>
             <FormControl
              // placeholder="Search"
              // aria-label="Search"
              aria-describedby="basic-addon2"
            />

            <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={updateSearchText}
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Search For"
              id="input-group-dropdown-2"
            >
              <Dropdown.Item href="#">Movies</Dropdown.Item>
              <Dropdown.Item href="#">TV Shows</Dropdown.Item>
              <Dropdown.Item href="#">People</Dropdown.Item>
            </DropdownButton> 
          </InputGroup> */}

          <form className="d-flex">
            <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={updateSearchText}
            />
            <button className="btn btn-outline-secondary" type="button" onClick={updateSearchText}>Search</button>
          </form>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;
