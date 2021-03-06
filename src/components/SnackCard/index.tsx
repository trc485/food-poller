import React from 'react'
import styled from 'styled-components'
import LikeControls from "../LikeControls";
import AdminControls from "../AdminControls";
import {ISnack} from "../../App";

interface IProps {
    snack: ISnack,
    handleBtnLikeClick: () => void
}

const StyledBox = styled.div`
    width: 360px;
    margin-right: auto;
`


const SnackCard = ({snack, handleBtnLikeClick}: IProps) => {

    return (
        <StyledBox className="box">
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src={snack.imgUrl}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{snack.name}</strong>
                            <small>{snack.price} CZK</small>
                            <br/>
                            {snack.description}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <AdminControls />
                        </div>
                    </nav>
                </div>
                <div className="media-right">
                    <LikeControls
                        likesCount={snack.likesCount}
                        handleBtnLikeClick={handleBtnLikeClick}
                    />
                </div>
            </article>
        </StyledBox>
    )
}

export default SnackCard
