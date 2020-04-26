export function rand(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

export function el(id) {
	const node = document.getElementById(id);

	function append(tpl) {
		node.insertAdjacentHTML('beforeend', tpl);
	}
	
	function prepend(tpl) {
		node.insertAdjacentHTML('afterbegin', tpl);
	}
	
	function insert(tpl) {
		node.innerHTML = tpl;
	}
	
	function toggleClass(cls) {
		const currentCls = node.className;
		const clsList = currentCls.split(' ');
		
		if (clsList.length > 1) {
			if (currentCls.includes(cls)) {
				node.className = clsList[clsList.length - 1];
			} else {
				node.className = `${currentCls} ${cls}`;
			}
		} else {
			if (currentCls.includes(cls)) {
				node.className = '';
			} else {
				node.className = cls;
			}
		}
	}
	
	return {
		append,
		prepend,
		insert,
		toggleClass
	};
}

