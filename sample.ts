
// Returns designs that match the category slug. Designs with `showFirst` are always
// included in every category.
export function filterDesignsByCategory(
	designs: Design[],
	categorySlug: string | null
): Design[] {
	if ( ! categorySlug ) {
		return designs;
	}

	if ( categorySlug === SHOW_ALL_SLUG ) {
		return designs;
	}

	return designs.filter(
		( design ) =>
			design.showFirst ||
			isBlankCanvasDesign( design ) ||
			design.categories.find( ( { slug } ) => slug === categorySlug )
	);
}
