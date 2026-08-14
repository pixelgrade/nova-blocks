const createSharingTriggerTemplate = ( buttonLabel ) => [
	[
		'core/buttons',
		{},
		[
			[
				'core/button',
				{
					tagName: 'button',
					type: 'button',
					text: buttonLabel,
				},
			],
		],
	],
];

export { createSharingTriggerTemplate };
