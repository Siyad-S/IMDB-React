import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import "../HeaderChild/HeaderChild.css"
import { DataContext } from '../../Context/contextApi'

const HeaderChild = ({search, handleSearch, searchInput}) => {

  const { watchlist } = useContext(DataContext)
  let navigate = useNavigate();

  return (
    <>
    <div className="icon_with_menu">
            <div className="imdb_icon" onClick={() => navigate("/")}>
              <img
                src="https://download.logo.wine/logo/IMDb/IMDb-Logo.wine.png"
                alt=""
              />
            </div>
            <div className="menu">
              <button>
                <i className="material-symbols-outlined">menu</i>
                Menu
              </button>
            </div>
          </div>
          <div className="search">
            <input
              type="search"
              placeholder="Search IMDB"
              name="search"
              value={searchInput || ''}
              onChange={handleSearch}
              onKeyDown={handleSearch}
              onKeyUp={search}
              // onChange={clearInputValue}
            />
            <button type="button" onClick={search}>
              <i className="material-symbols-outlined">search</i>
            </button>
          </div>
          <div className="watch_sign">
            <div className="Watchlist">
              <button onClick={() => navigate(`/watchlist`)}>
              ({watchlist.length}) 
                <i className="material-symbols-outlined">playlist_add</i>
                Watchlist
              </button>
            </div>
            <div className="sign_in">
              <button href="signin">Sign in</button>
            </div>
          </div>
    </>
  )
}

export default HeaderChild