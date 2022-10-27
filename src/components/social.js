import React, { useEffect } from "react";
export default function Social(props){
    function handleClick(){
        props.addComment(document.getElementById("comment-box").value)
        
    }
    /*cleart die eingabe nach absenden des kommentars. 
    use effect ist notwending um textarea-box zu clearen */
    useEffect(() => {document.getElementById("comment-box").value=""});

    /*mappt die serverseitigen kommentare zu dom-elementen */
    let allComments = props.comments.map((comment)=> {
        return(
        <div className="social-posts">
            <pre className="social-posts-entry">{comment}</pre>
        </div>
    )
    }
    )
    /*rendert den kommentarbereich */
    return(
        <div className="social main-elements">
            <h1>Gästebuch</h1>
            {allComments}
            <div className="social-posts" id="social-posts-textarea">
                <textarea id="comment-box" rows="10" >
                </textarea>
                <button className="button" onClick={handleClick}>Eintrag einsenden</button> 
            </div>
        </div>
    )
}
