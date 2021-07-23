import React from 'react';
import { Link } from "react-router-dom";

const Editmodal = () => {
    return (
        <div>
            <div className="modal fade" id="editCommentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCommentModalLabel">Edit Comment</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="pl-3 pr-3">
                                <textarea name="" className="form-control border-0 p-0 shadow-none" id="editCommentContent" rows="4"></textarea>
                            </div>

                        </div>
                        <input type="hidden" id="editCommentID" value="" />
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary btn_update_comment">Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editReplyModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editReplyModalLabel">Edit Reply</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <textarea name="" className="form-control border-0 p-0 shadow-none" id="editReplyModalContent" rows="4"></textarea>
                        </div>
                        <input type="hidden" id="editReplyID" value="" />
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary btn_update_reply">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="addReplyModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addReplyModalLabel">Add Reply</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <textarea name="" className="form-control border-0 p-0 shadow-none" id="addReplyModalContent" rows="2" placeholder="Write reply here..."></textarea>
                            <input type="hidden" value="" id="addReplyModalCID" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary btn_store_reply">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="viewFullAttach" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="wrap_attach_full_view">

                            </div>
                        </div>
                        <input type="hidden" id="editReplyID" value="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editmodal;