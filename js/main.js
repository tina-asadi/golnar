/**
 * Golnar: page behaviour.
 * Hero, collection and filters, bag, product detail, carpet guide,
 * raj calculator and the private-viewing form.
 * Depends on data.js, utils.js and carpet.js, loaded before it.
 */

(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const findRug = (id) => RUGS.find((rug) => rug.id === id);

  const BAG_KEY = 'golnar-bag';
  const state = {
    city: 'All',
    size: 'All',
    bag: storage.get(BAG_KEY, []).filter((id) => findRug(id)),
  };

  /* ---------- Hero ---------- */

  function initHero() {
    const rug = RUGS[0];
    const mount = $('#heroRug');
    attachKnotLoupe(mount, createCarpet(rug, 90, 6, mount));

    const { months } = knotStats(rug.width, rug.length, rug.raj, rug.weavers);
    $('#heroSpec').innerHTML = `
    <span>No. ${rug.id} · ${rug.city}</span>
    <b>${rug.name}</b>
    <span>${rug.width} × ${rug.length} cm · ${rug.raj} raj</span>
    <span>${rug.weavers} weavers · ${months} months on the loom</span>`;
  }

  /* ---------- Start ---------- */

  initHero();
})();
