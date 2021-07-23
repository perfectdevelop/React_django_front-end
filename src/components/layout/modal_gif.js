import React from 'react';
import { Link } from 'react-router-dom';

const Modal_gif = () => {
    return (
        <div>
            <div className="modal fade" id="gifInput" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        </div>
                        <div className="modal-body">
                            <div className="custom_scroll text-center gif_wrap_area">
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn_cancel btn_blue" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <script>
    $(document).ready(function(){
        for(var i=1;i<94;i++)
        {
            var html = `
                <div className="gif_item_warp">
                    <img src="/media/gif/gif${i}.gif" className="gif_item_img" data-name="gif${i}.gif" alt="">
                </div>
            `;
            $(".gif_wrap_area").append(html);
        }
       
    });
</script> */}
        </div>
    )
}

export default Modal_gif;