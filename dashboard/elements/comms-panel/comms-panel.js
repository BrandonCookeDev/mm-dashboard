(function() {
	const commsinfo = nodecg.Replicant('commsinfo', {
		defaultValue: [
			{
				name: "Commentator 1",
				tw: "asdf"
			},
			{
				name: "Commentator 2",
				tw: "asdf"
			},
			{
				name: "Commentator 2",
				tw: "asdf"
			}
		]
	});

	class CommsPanel extends Polymer.Element {
		static get is() {
			return 'comms-panel';
		}

		static get properties() {
			return {
				commsinfo: {
					type: Object
				}
			};
		}

		saveComms() {
			commsinfo.value = this.commsinfo;
		}

		addCom() {
			this.push('commsinfo', {
				name: 'New Commentator',
				tw: 'New Twitter'
			})
		}

    deleteCom(e) {
			this.splice('commsinfo', e.detail.index, 1);
		}

		ready() {
			super.ready();
			commsinfo.on('change', newData => this.commsinfo = _.cloneDeep(newData));
		}
	}

	customElements.define(CommsPanel.is, CommsPanel);
})();