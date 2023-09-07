import React, { useEffect, useState } from 'react'
import { Card } from '../../components/cards'

import './styles.css'

const API = "https://jsonplaceholder.org/posts"
export const RecentBlogs = () => {

	const [posts, setPosts] = useState([])
	useEffect(() => {

		fetch(API)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(posts => {
				setPosts(posts);
			})
			.catch(error => {
				console.error('There was a problem with the fetch operation:', error);
			});


	}, [])

	return (
		<div>
			<h2 className='subtitle'  >Recent blog posts</h2>
			<div className='recent-blogs'>



				<div className='container__card-main'>


					{
						posts.slice(1, 2).map(post => (
							<Card
								key={post.id}
								layout={"horizontal"}
								title={post.title}
								image={post.image}
								publishedAt={post.publishedAt}
								content={post.content}
								category={post.category}
								slug={post.slug}

							/>
						))
					}
				</div>

				<div className='container__cards-vertical'>
					{
						posts.slice(2, 4).map(post => (
							<Card
								key={post.id}
								layout={"vertical"}
								title={post.title}
								image={post.image}
								publishedAt={post.publishedAt}
								content={post.content}
								category={post.category}
								slug={post.slug}

							/>
						))
					}



				</div>
			</div>
		</div>

	)
}
