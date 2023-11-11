import React from 'react'
import { Link } from 'react-router-dom'

function NavFooter() {
  return (
    <div>
        <nav className='nav-footer'>
           <div>
                <h4 className='nav-footer__heading'>Brands</h4>
                <ul>
                    <li>
                        <Link to="y">Addidas</Link>
                    </li>
                    <li>
                     <Link to="y">Puma</Link>
                    </li>
                    <li>
                     <Link to="y">Reebok</Link>
                    </li>
                    <li>
                     <Link to="y">Nike</Link>
                    </li>
                    <li>
                     <Link to="y">Balenciaga</Link>
                    </li>
                    <li>
                     <Link to="y">Home 6</Link>
                    </li>
                </ul>
            </div>

           <div>
                <ul>
                    <h4>Company</h4>
                    <li>
                     <Link to="y">About Us</Link>
                    </li>
                    <li>
                     <Link to="y">Career</Link>
                    </li>
                    <li>
                     <Link to="y">Find a Store</Link>
                    </li>
                    <li>
                     <Link to="y">Terms & Conditions</Link>
                    </li>
                    <li>
                     <Link to="y">Sitemap</Link>
                    </li>
                    <li>
                     <Link to="y">FAQ</Link>
                    </li>
                </ul>
           </div>

           <div>
              <h4>Help</h4>
              <ul>
                  <li>
                   <Link to="y">Contact Us</Link>
                  </li>
                  <li>
                   <Link to="y">Money Refund</Link>
                  </li>
                  <li>
                   <Link to="y">Order Status</Link>
                  </li>
                  <li>
                   <Link to="y">Shipping Info</Link>
                  </li>
                  <li>
                   <Link to="y">Open Disput</Link>
                  </li>
                  <li>
                   <Link to="y">Vouchers</Link>
                  </li>
               </ul>
           </div>

           <div>
             <h4>Contact</h4>
              <ul>
                <li>
                 <Link to="y">Facebook</Link>
                </li>
                <li>
                 <Link to="y">Twitter</Link>
                </li>
                <li>
                 <Link to="y">Instagram</Link>
                </li>
                <li>
                 <Link to="y">Linkedin</Link>
                </li>
                <li>
                 <Link to="y">Youtube</Link>
                </li>
                <li>
                 <Link to="y">Github</Link>
                </li>
               </ul>
           </div>

           
        </nav>
    </div>
  )
}

export default NavFooter