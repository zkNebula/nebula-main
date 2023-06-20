import { 
	FooterLinks, 
	Links, 
	FeatureProps, 
	ListItemProps, 
	Socials, 
	Votes
} from '@/typings';
import HeroImage from '@/public/images/hero-image.png';
import RocketIcon from '@/public/svg/rocket.svg';
import CommunityIcon from '@/public/svg/community.svg';
import NFTIcon from '@/public/svg/nft.svg';
import MoneyIcon from '@/public/svg/money.svg';
import ProfileImage from '@/public/images/profile.png';

// Socials
import TwitterIcon from '@/public/svg/socials/twitter.svg';
import DiscordIcon from '@/public/svg/socials/discord.svg';
import WebIcon from '@/public/svg/socials/web.svg';

export const navigationLinks = [
	{
		name: "Home",
		route: "/"
	},
	{
		name: "About",
		route: "/"
	}
];

export const heroContent = {
	heading: "Unleash the power of Nebula DAO ecosystem",
	content: "Build your DAO, explore communities, and find inspiration for your project all in one place.",
	image: HeroImage
};

export const featuresContent: FeatureProps[] = [
	{
		icon: RocketIcon,
		title: "Nebula Launchpad",
		content: "Access DAO Maker incubations and other top-tier tokens and NFT projects before they reach secondary markets."
	},
	{
		icon: CommunityIcon,
		title: "Community Governance",
		content: "DAO stakers and verified wallets can vote for startups to win token bribes."
	},
	{
		icon: NFTIcon,
		title: "Nebula NFT",
		content: "Join the DAO and participate in ecosystem governance."
	},
	{
		icon: MoneyIcon,
		title: "Nebula Stake",
		content: "Access yield, discounts, and exclusive private allocations."
	}
];

export const communityGovernanceContent: ListItemProps = {
	title: "Nebula DAO",
	content: "Join the community, participate in discussions, and decide on the future of the Nebula ecosystem.",
	readMoreRoute: '/',
	button: {
		title: "Participate",
		route: "/participate"
	},
	isLinkActive: true
};

export const nebulaLaunchpadContent: ListItemProps = {
	title: "Public IDOs",
	content: "Public SHOs allow anyone with more than $250 worth of tokens in their wallet to participate.",
	readMoreRoute: '/',
	button: {
		title: "Join IDOs Now",
		route: "/participate"
	},
	isLinkActive: true
}

export const nebulaNFTContent: ListItemProps[] = [
	{
		title: "Revenue Sharing",
		content: "The revenue generated from zkNebula protocol, which include fees and other activites within the ecosystem, is shared with Nebula NFT holders.",
	},
	{
		title: "Ongoing Rewards",
		content: "Holders of Nebula receives continuous rewards inform of drip drop Nebula token Allocation.",
	},
	{
		title: "Limited Supply and Uniqueness",
		content: "Nebula NFTs have a restricted supply, with only 10000NFTs to be minted ever.",
		readMoreRoute: '/',
		button: {
			title: "Buy NFT",
			route: "/buy-nft"
		},
		isLinkActive: true
	}
]

export const nebulaStakeContent: ListItemProps[] = [
	{
		title: "Community Voting",
		content: "Vote for startups to earn free token incentives.",
	},
	{
		title: "Governance",
		content: "Take part in the future and development of the Nebula ecosystem.",
		readMoreRoute: '/',
		button: {
			title: "Stake now",
			route: "/stake"
		},
		isLinkActive: true
	}
]	 

export const footerNavigationLinks: FooterLinks[] = [
	{
		heading: "Product",
		links: [
			{
				name: "nebula launchpad",
				route: "https://nebula-launchpad.com"
			},
			{
				name: "nebula stake",
				route: "https://nebula-stake.com"
			},
			{
				name: "buy nebula",
				route: "/buy"
			},
			{
				name: "governance",
				route: "/governance"
			},
			{
				name: "sitemap",
				route: "/sitemap"
			}
		]
	},
	{
		heading: "Resources",
		links: [
			{
				name: "document",
				route: "/document"
			},
			{
				name: "support",
				route: "/support"
			},
			{
				name: "sitemap",
				route: "/sitemap"
			}
		]
	},
	{
		heading: "social",
		links: [
			{
				name: "twitter",
				route: "https://twitter.com/nebula"
			},
			{
				name: "discord",
				route: "https://discord.com/nebula"
			}
		]
	}
];

export const dashboardLinks: Links[] = [
	{
		name: "dashboard",
		route: "/dashboard"
	},
	{
		name: "proposal",
		route: "/dashboard/proposal"
	},
	{
		name: "new proposal",
		route: "/dashboard/proposal/new"
	},
	{
		name: "about",
		route: "/dashboard/about"
	}
];

export const companySocials: Socials[] = [
	{
		title: "Twitter",
		icon: TwitterIcon,
		href: ""
	},
	{
		title: "Discord",
		icon: DiscordIcon,
		href: ""
	},
	{
		title: "Web link",
		icon: WebIcon,
		href: ""
	},
];

export const proposals =  [
	{
		user: {
			name: "dinkydonkey.eth",
			image: ProfileImage
		},
		title: "Prevent Major $DAO DUMP from USDR distributions",
		content: "Proposal#8 made by @Dante.eth on our Discord governance forum. To see and discuss the proposal, join : https://www.discord.gg/daomaker The following",
		options: [
			{
				percentage: '41.52%',
				title: "Option 1",
				stat: "3M DAO"
			},
			{
				percentage: '85%',
				title: "Option 2",
				stat: "18K DAO"
			},
			{
				percentage: '60.23%',
				title: "Option 3",
				stat: "4.1M DAO"
			}
		],
		endDate: "Ended 8 months ago",
		quorum: "300% quorum reached",
		status: "closed"
	},
	{
		user: {
			name: "dinkydonkey.eth",
			image: ProfileImage
		},
		title: "Prevent Major $DAO DUMP from USDR distributions",
		content: "Proposal#8 made by @Dante.eth on our Discord governance forum. To see and discuss the proposal, join : https://www.discord.gg/daomaker The following",
		options: [
			{
				percentage: '41.52%',
				title: "Option 1",
				stat: "3M DAO"
			},
			{
				percentage: '75%',
				title: "Option 2",
				stat: "18K DAO"
			},
			{
				percentage: '60.23%',
				title: "Option 3",
				stat: "4.1M DAO"
			}
		],
		endDate: "Ended 8 months ago",
		quorum: "300% quorum reached",
		status: "closed"
	},
	{
		user: {
			name: "dinkydonkey.eth",
			image: ProfileImage
		},
		title: "Prevent Major $DAO DUMP from USDR distributions",
		content: "Proposal#8 made by @Dante.eth on our Discord governance forum. To see and discuss the proposal, join : https://www.discord.gg/daomaker The following",
		options: [
			{
				percentage: '41.52%',
				title: "Option 1",
				stat: "3M DAO"
			},
			{
				percentage: '70%',
				title: "Option 2",
				stat: "18K DAO"
			},
			{
				percentage: '60.23%',
				title: "Option 3",
				stat: "4.1M DAO"
			}
		],
		endDate: "Ended 8 months ago",
		quorum: "300% quorum reached",
		status: "closed"
	},
];

export const votes: Votes[] = [
	{
		user: {
			image: ProfileImage,
			address: "0xA2dC...697B"
		},
		coins: '1.3M Nebula',
		option: "Option 3"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xA2dC...697B"
		},
		coins: '1.3M Nebula',
		option: "Option 3"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xA2dC...697B"
		},
		coins: '1.3M Nebula',
		option: "Option 3"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xA2dC...697B"
		},
		coins: '1.3M Nebula',
		option: "Option 3"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xA2dC...697B"
		},
		coins: '1.3M Nebula',
		option: "Option 3"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xA2dC...697B"
		},
		coins: '1.3M Nebula',
		option: "Option 3"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xA2dC...697B"
		},
		coins: '1.3M Nebula',
		option: "Option 3"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xA2dC...697B"
		},
		coins: '1.3M Nebula',
		option: "Option 3"
	}
];