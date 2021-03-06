import React from "react";

class Titles extends React.Component {

  render() {
    return (
      <div class= "header">
        <img class= "logo" src="https://i.ibb.co/MSFL07F/logo-2x.png"/>
	<div class="main-header right">
            <nav id="nav-wrap" class="primary_menu_container">
	    <ul id="primary_menu" class="primary_menu nav">
		<li class= "menu-item"><a href="#">Featured<i class="fas fa-angle-down expand"></i></a>
		<ul class="dropdown">
			<li class="dropdown-item"><a href="#">Best Sellers</a></li>
			<li class="dropdown-item"><a href="#">New Arrivals</a></li>
			<li><a href="#">Staff Picks</a></li>
		</ul>
		</li>
		<li class= "menu-item"><a href="#">Classics<i class="fas fa-angle-down expand"></i></a>
		<ul class="dropdown">
			<li class="dropdown-item"><a href="#">English classics</a></li>
			<li class="dropdown-item"><a href="#">American classics</a></li>
			<li class="dropdown-item"><a href="#">French classics</a></li>
			<li class="dropdown-item"><a href="#">Spanish classics</a></li>
			<li><a href="#">German classics</a></li>
		</ul>
		</li>
		<li class= "menu-item"><a href="">Fiction<i class="fas fa-angle-down expand"></i></a>
		<ul class="dropdown">
			<li class="dropdown-item"><a href="#">Dystopian</a></li>
			<li class="dropdown-item"><a href="#">Fantasy</a></li>
			<li class="dropdown-item"><a href="#">Science Fiction</a></li>
			<li class="dropdown-item"><a href="#">Horror</a></li>
			<li class="dropdown-item"><a href="#">Thriller</a></li>
			<li class="dropdown-item"><a href="#">Graphic Novel</a></li>
			<li><a href="#">Young Adult</a></li>
		</ul>		
		</li>
		<li class= "menu-item"><a href="">Non-fiction<i class="fas fa-angle-down expand"></i></a>
		<ul class="dropdown">
			<li class="dropdown-item"><a href="#">Computer Science</a></li>
			<li class="dropdown-item"><a href="#">Self Help</a></li>
			<li class="dropdown-item"><a href="#">True Crime</a></li>
			<li><a href="#">Biography & Memoir</a></li>
		</ul>
		</li>
		<li class= "menu-item"><a href="">Store<i class="fas fa-angle-down expand"></i></a>
		<ul class="dropdown">
			<li class="dropdown-item"><a href="">Cart</a></li>
			<li class="dropdown-item"><a href="">Checkout</a></li>
			<li><a href="">My Account</a></li>
		</ul>
		</li>

		<li class = "menu-item"><a href="#"><i class="fas fa-shopping-cart"></i>0 items</a></li>
				<li class="menu-item"><div class= "search-container">
  	        <input type="search" placeholder="What are you looking for?"/>
	        <a href="#"><i class="fas fa-search search"></i></a></div></li>
		</ul>
	</nav>

         </div>
      </div>
    );
  }
};

export default Titles;
