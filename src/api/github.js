import { Octokit } from 'octokit';

const octokit = new Octokit({ auth: import.meta.env.VITE_SECRET });

const headers = {
    'X-GitHub-Api-Version': '2022-11-28',
};

/**@returns {Promise<User>} */
export async function getLoggedUser() {
    const user = await octokit.request('GET /user', {
        headers: headers,
    });
    return user.data;
}

/**@returns {Promise<RepoData[]>} */
export async function getOwnRepos() {
    const user = await getLoggedUser();
    const repos = await getUserRepos(user.login);
    return repos;
}

/**
 * @param {string} owner
 * @returns {Promise<RepoData[]>} */
export async function getUserRepos(owner) {
    const repos = await octokit.request('GET /users/{username}/repos', {
        username: owner,
        headers: headers,
    });
    return repos.data;
}

/**
 * @param {string} query
 * @returns {Promise<RepoData[]>} */
export async function searchRepos(query) {
    const repos = await octokit.request('GET /search/repositories', {
        q: query,
        headers: headers,
    });
    return repos.data.items;
}

/**
 * @param {string} owner
 * @param {string} repo
 * @returns {Promise<User[]>} */
export async function getContributors(owner, repo) {
    const repos = await octokit.request(
        'GET /repos/{owner}/{repo}/contributors',
        {
            owner: owner,
            repo: repo,
            headers: headers,
        }
    );
    if (repos.status !== 200) {
        return [];
    }
    return repos.data;
}

/**
 * @param {string} owner
 * @param {string} repo
 * @returns {Promise<RepoData>} */
export async function getRepo(owner, repo) {
    const repos = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: owner,
        repo: repo,
        headers: headers,
    });
    if (repos.status !== 200) {
        return null;
    }
    return repos.data;
}

/**
 * @typedef {object} SearchResult
 * @property {number} total_count
 * @property {boolean} incomplete_results
 * @property {RepoData[]} items
 */

/**
 * @typedef {object} RepoData
 * @property {number} id
 * @property {string} node_id
 * @property {string} name
 * @property {string} full_name
 * @property {object} owner
 * @property {string} owner.login
 * @property {number} owner.id
 * @property {string} owner.node_id
 * @property {string} owner.avatar_url
 * @property {string} owner.gravatar_id
 * @property {string} owner.url
 * @property {string} owner.html_url
 * @property {string} owner.followers_url
 * @property {string} owner.following_url
 * @property {string} owner.gists_url
 * @property {string} owner.starred_url
 * @property {string} owner.subscriptions_url
 * @property {string} owner.organizations_url
 * @property {string} owner.repos_url
 * @property {string} owner.events_url
 * @property {string} owner.received_events_url
 * @property {string} owner.type
 * @property {boolean} owner.site_admin
 * @property {boolean} private
 * @property {string} html_url
 * @property {string} description
 * @property {boolean} fork
 * @property {string} url
 * @property {string} archive_url
 * @property {string} assignees_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} deployments_url
 * @property {string} downloads_url
 * @property {string} events_url
 * @property {string} forks_url
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} git_url
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} languages_url
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} notifications_url
 * @property {string} pulls_url
 * @property {string} releases_url
 * @property {string} ssh_url
 * @property {string} stargazers_url
 * @property {string} statuses_url
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} trees_url
 * @property {string} clone_url
 * @property {string} mirror_url
 * @property {string} hooks_url
 * @property {string} svn_url
 * @property {string} homepage
 * @property {null} language
 * @property {number} forks_count
 * @property {number} stargazers_count
 * @property {number} watchers_count
 * @property {number} size
 * @property {string} default_branch
 * @property {number} open_issues_count
 * @property {boolean} is_template
 * @property {string[]} topics
 * @property {boolean} has_issues
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {boolean} has_pages
 * @property {boolean} has_downloads
 * @property {boolean} has_discussions
 * @property {boolean} archived
 * @property {boolean} disabled
 * @property {string} visibility
 * @property {string} pushed_at
 * @property {string} created_at
 * @property {string} updated_at
 * @property {object} permissions
 * @property {boolean} permissions.admin
 * @property {boolean} permissions.push
 * @property {boolean} permissions.pull
 * @property {object} security_and_analysis
 * @property {object} security_and_analysis.advanced_security
 * @property {string} security_and_analysis.advanced_security.status
 * @property {object} security_and_analysis.secret_scanning
 * @property {string} security_and_analysis.secret_scanning.status
 * @property {object} security_and_analysis.secret_scanning_push_protection
 * @property {string} security_and_analysis.secret_scanning_push_protection.status
 */

/**
 * @typedef {object} User
 * @property {string} login
 * @property {number} id
 * @property {string} node_id
 * @property {string} avatar_url
 * @property {string} gravatar_id
 * @property {string} url
 * @property {string} html_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} organizations_url
 * @property {string} repos_url
 * @property {string} events_url
 * @property {string} received_events_url
 * @property {string} type
 * @property {boolean} site_admin
 * @property {string} name
 * @property {string} company
 * @property {string} blog
 * @property {string} location
 * @property {string} email
 * @property {boolean} hireable
 * @property {string} bio
 * @property {string} twitter_username
 * @property {number} public_repos
 * @property {number} public_gists
 * @property {number} followers
 * @property {number} following
 * @property {string} created_at
 * @property {string} updated_at
 * @property {number} private_gists
 * @property {number} total_private_repos
 * @property {number} owned_private_repos
 * @property {number} disk_usage
 * @property {number} collaborators
 * @property {boolean} two_factor_authentication
 * @property {object} plan
 * @property {string} plan.name
 * @property {number} plan.space
 * @property {number} plan.private_repos
 * @property {number} plan.collaborators
 */
