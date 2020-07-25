import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { ListGroup, ListGroupItem, ListGroupItemHeading, Badge } from 'reactstrap'
import { PaginatedList } from 'react-paginated-list'

const Repos = ({ repos_url }) => {
    const [repos, setRepos] = useState([])
    const [recent, setRecent] = useState([])

    const fetchRepos = async () => {
        const { data } = await Axios.get(repos_url, {

        })
        setRepos(data)
    }
    const fetchRecentUpdated = async () => {
        const { data } = await Axios.get(repos_url, {
            params: {
                sort: 'updated_at:desc',
                per_page: 3
            }
        })
        setRecent(data)
    }

    useEffect(() => {
        fetchRepos()
        fetchRecentUpdated()
    }, [repos_url])

    return (
        <>


            <ListGroup className='mb-5'>
                <div className="font-weight-bold" style={{ color: 'white' }}><h4>Recently Updated</h4></div>
                {recent.map(repo => (
                    <ListGroupItem key={repo.id}>
                        <ListGroupItemHeading ><a href={repo.html_url} style={{ color: 'black' }}>{repo.name}</a></ListGroupItemHeading>

                        <div><Badge color='danger' >{repo.language}</Badge></div>
                        <div className="text-secondary">{repo.description}</div>
                    </ListGroupItem>
                ))}
            </ListGroup>



            <PaginatedList
                list={repos}
                itemsPerPage={5}
                renderList={(list) => (
                    <ListGroup>
                        <div className="font-weight-bold" style={{ color: 'white' }}><h4>All Repositories</h4></div>
                        {list.map(repo => (

                            <ListGroupItem key={repo.id}>
                                <ListGroupItemHeading ><a href={repo.html_url} style={{ color: 'black' }}>{repo.name}</a></ListGroupItemHeading>

                                <div><Badge color='danger' >{repo.language}</Badge></div>
                                <div className="text-secondary">{repo.description}</div>
                            </ListGroupItem>
                        )
                        )
                        }
                    </ListGroup>
                )}
            />

        </>
    );
}

export default Repos;