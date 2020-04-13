const { Component } = wp.element;

class Tabs extends Component {

	constructor( props ) {
		super( ...arguments );

		this.state = {
			activeTab: props.children[0].props.label,
		};
	}

	onClickTabItem(tab) {
		this.setState({ activeTab: tab });
	}

	render() {
		const {
			props: {
				children,
			},
			state: {
				activeTab,
			}
		} = this;

		const onClickTabItem = this.onClickTabItem.bind( this );

		return (
			<div className="novablocks-tabs">
				<ol className="novablocks-tabs__list">
					{children.map((child) => {
						const { label } = child.props;

						return (
							<Tab
								activeTab={activeTab}
								key={label}
								label={label}
								onClick={onClickTabItem}
							/>
						);
					})}
				</ol>
				<div className="novablocks-tabs__content">
					{ children.map((child) => {
						if (child.props.label !== activeTab) return undefined;
						return child.props.children;
					}) }
				</div>
			</div>
		)
	}
}

class Tab extends Component {

	onClick() {
		const { label, onClick } = this.props;
		onClick(label);
	}

	render() {
		const {
			activeTab,
			label,
		} = this.props;

		const onClick = this.onClick.bind( this );

		let className = 'novablocks-tab';

		if (activeTab === label) {
			className += ' novablocks-tab--active';
		}

		return (
			<li
				className={className}
				onClick={ onClick }
			>
				{label}
			</li>
		);
	}
}

export { Tab, Tabs };
