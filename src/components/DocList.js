import React, { Component } from 'react'
import { Accordion, Icon, List } from 'semantic-ui-react'
import { v4 as uuidv4 } from 'uuid';


export default class DocList extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {

        const { activeIndex } = this.state
        const renderedItems = this.props.items.map((item, index) => {
            const active = index === activeIndex ? "0" : "";
            return (

                <Accordion key={uuidv4()} fluid styled>
                    <Accordion.Title
                        active={active}
                        index={index}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
                        {item.chapterNum ? "Chapter" : ""} {item.chapterNum}{item.ChapterNum ? ": " : ""} {item.chapterTitle}
                    </Accordion.Title>
                    <Accordion.Content active={active}>
                        <List>
                            {item.subchapters.map(subchapter => {

                                return (
                                    <List.Item key={uuidv4()} style={{ textAlign: 'left' }} >
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={subchapter.url}>
                                            {subchapter.subChapterNum}
                                            {subchapter.subChapterNum ? "|  " : ""}
                                            {subchapter.docTitle}
                                            {subchapter.subjectMatter ? " - " + subchapter.subjectMatter : " "}</a>
                                    </List.Item>
                                )
                            })
                            }

                        </List>
                    </Accordion.Content>
                </Accordion>
            )
        });

        return (

            <div>
                {renderedItems}
            </div>

        )
    }
}