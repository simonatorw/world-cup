function lib(node) {
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
	
	function style(key, val) {
		node.style[key] = val;
	}
	
	return {
		append,
		prepend,
		insert,
		toggleClass,
		style
	};
}


export const el = (id) => lib(document.getElementById(id));

export const qry = (sel) => lib(document.querySelector(sel));

export const qryAll = (sel, i) => lib(document.querySelectorAll(sel)[i]);

export function rand(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

export const sleep =  ms => new Promise(resolve => setTimeout(resolve, ms));

export const log = txt => console.log(txt);


