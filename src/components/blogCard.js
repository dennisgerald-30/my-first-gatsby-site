import React from 'react';
import Image from './Image';
import '../styles/blogCard.scss'
import {Row, Col, Card} from 'react-bootstrap'
import { Icon, InlineIcon } from '@iconify/react';
import subtitleIcon from '@iconify-icons/whh/subtitles';

const BlogCard = (props) => {
    return (
        <Card>
            <Image alt={`${props.title} Poster`} filename={props.postername} className="card-img"/>
            <Card.Body>
                <Card.Title>
                    <h2 className="movie-title"><a href={props.link} target="_blank">{props.title}</a></h2>
                    <p className="text-small">{props.year} | {props.genre} | {props.pg}</p>
                </Card.Title>
                <Card.Text>
                    {props.children}
                </Card.Text>
                    <p className="text-tagline">{props.tagline}</p>
            </Card.Body>
        </Card>
    )
}

export default BlogCard