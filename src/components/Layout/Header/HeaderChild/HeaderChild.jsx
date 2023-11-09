import React from 'react'
import "../HeaderChild/HeaderChild.css"

const HeaderChild = ({search, handleSearch, searchInput}) => {
  return (
    <>
    <div className="icon_with_menu">
            <div className="imdb_icon">
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
              value={searchInput !== null ? searchInput : ''}
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
              <button>
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