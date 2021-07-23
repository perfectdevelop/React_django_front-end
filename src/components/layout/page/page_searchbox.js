import React from 'react';
import { Link } from "react-router-dom";

const Page_searchbox = () => {
    return (
        <div>
            <div class="search-sec mb-3">
                <div class="search-box">
                    <form>
                        <div class="d-md-flex">
                            <input type="text" name="search" placeholder="Search keywords" />
                            <Link to="/create"><i class="fa fa-plus mr-2"></i>Create Page</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page_searchbox;